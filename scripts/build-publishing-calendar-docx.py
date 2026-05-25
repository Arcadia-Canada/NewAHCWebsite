#!/usr/bin/env python3
"""Build docs/PUBLISHING-CALENDAR.docx from structured calendar data (stdlib only)."""

from __future__ import annotations

import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "PUBLISHING-CALENDAR.docx"

NS_W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
NS_R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"


def esc(text: str) -> str:
    return escape(str(text))


def run(text: str, *, bold: bool = False, size: int | None = None) -> str:
    rpr = ""
    if bold or size:
        parts = []
        if bold:
            parts.append("<w:b/>")
        if size:
            parts.append(f'<w:sz w:val="{size * 2}"/>')
            parts.append(f'<w:szCs w:val="{size * 2}"/>')
        rpr = f"<w:rPr>{''.join(parts)}</w:rPr>"
    return f"<w:r>{rpr}<w:t xml:space=\"preserve\">{esc(text)}</w:t></w:r>"


def para(text: str = "", *, bold: bool = False, size: int | None = None, style: str | None = None) -> str:
    ppr = f'<w:pPr><w:pStyle w:val="{style}"/></w:pPr>' if style else ""
    body = run(text, bold=bold, size=size) if text else ""
    return f"<w:p>{ppr}{body}</w:p>"


def heading(text: str, level: int) -> str:
    return para(text, style=f"Heading{level}")


def bullet(text: str) -> str:
    return (
        f'<w:p><w:pPr><w:pStyle w:val="ListParagraph"/>'
        f'<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr></w:pPr>'
        f"{run(text)}</w:p>"
    )


def table(headers: list[str], rows: list[list[str]], col_widths: list[int] | None = None) -> str:
    ncols = len(headers)
    grid = ""
    if col_widths:
        for w in col_widths[:ncols]:
            grid += f'<w:gridCol w:w="{w}"/>'
    else:
        w_each = 9360 // ncols
        grid = "".join(f'<w:gridCol w:w="{w_each}"/>' for _ in range(ncols))

    def cell(text: str, header: bool = False) -> str:
        shd = '<w:shd w:val="clear" w:color="auto" w:fill="D9D9D9"/>' if header else ""
        tcpr = f"<w:tcPr>{shd}<w:tcW w:w=\"0\" w:type=\"auto\"/></w:tcPr>"
        r = run(text, bold=header)
        return f"<w:tc>{tcpr}<w:p>{r}</w:p></w:tc>"

    hdr = "<w:tr>" + "".join(cell(h, header=True) for h in headers) + "</w:tr>"
    body = ""
    for row in rows:
        padded = row + [""] * (ncols - len(row))
        body += "<w:tr>" + "".join(cell(c) for c in padded[:ncols]) + "</w:tr>"

    return (
        f'<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/>'
        f'<w:tblBorders>'
        f'<w:top w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
        f'<w:left w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
        f'<w:bottom w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
        f'<w:right w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
        f'<w:insideH w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
        f'<w:insideV w:val="single" w:sz="4" w:space="0" w:color="auto"/>'
        f"</w:tblBorders></w:tblPr><w:tblGrid>{grid}</w:tblGrid>{hdr}{body}</w:tbl>"
    )


def build_body() -> str:
    parts: list[str] = []

    parts.append(heading("Arcadia Home Care — Publishing Calendar", 1))
    parts.append(para("arcadiahomecare.ca · 1 article per week · Target publish day: Tuesday"))
    parts.append(para("Last updated: May 25, 2026 · Schedule starts: June 3, 2026"))
    parts.append(para("Companion files: PUBLISHING-CALENDAR.md, AUTHORITY-MAP.md, 12-EXECUTION-ROADMAP.md"))

    parts.append(heading("Pace and rules", 2))
    parts.append(
        table(
            ["Rule", "Detail"],
            [
                ["Default cadence", "1 article / week"],
                ["Priority order", "Master Prompt #7–10 → former hub topics (11) → cluster depth"],
                ["Voice articles (MP)", "07-VOICE-AND-TONE.md; brief + kit required (Phase 9)"],
                ["Skip weeks", "Mark SKIP; do not double up unless intentional"],
                ["URL slugs", "Confirm in 05-URL-CONVENTIONS.md before writing"],
            ],
        )
    )

    parts.append(heading("Per-article checklist (every publish)", 3))
    for item in [
        "Article live at permanent URL (HTTP 200)",
        "Cluster hub updated (status: live)",
        "AUTHORITY-MAP.md → Published + URL + date",
        "10-KEYWORD-OWNERSHIP.md if new keyword",
        "Internal links from 2–3 existing articles",
        "BRIEF-[slug].md + KIT-[slug].docx",
        "GSC: request indexing",
        "Remove cluster redirect if AUTHORITY-MAP notes redirect",
    ]:
        parts.append(bullet(item))

    parts.append(heading("Phase A — Master Prompt completion (June 2026)", 2))
    parts.append(para("Emotional backbone. Do not reorder MP #7–10 without updating 02-CONTENT-CLUSTERS.md."))
    parts.append(
        table(
            ["Week of", "Date", "MP", "Article", "Cluster", "Slug"],
            [
                ["Jun 3", "2026-06-03", "7", "Navigating the System When It Wasn't Built for You", "Navigating", "navigating-the-system"],
                ["Jun 10", "2026-06-10", "8", "The Guilt of Getting Help", "Caregiver", "guilt-of-getting-help"],
                ["Jun 17", "2026-06-17", "9", "When the Situation Changes Overnight", "Navigating", "when-situation-changes-overnight"],
                ["Jun 24", "2026-06-24", "10", "What Trust Actually Means When Handing Over Responsibility", "Navigating", "what-trust-means-in-home-care"],
            ],
            [900, 1100, 500, 3200, 1100, 1600],
        )
    )

    parts.append(heading("Phase B — Former hub topics (July–September 2026)", 2))
    parts.append(para("Eleven topics removed from hub gray cards May 25, 2026."))

    parts.append(heading("July 2026 — Navigating", 3))
    parts.append(
        table(
            ["Week of", "Date", "Article", "Slug", "Notes"],
            [
                ["Jul 1", "2026-07-01", "When a Parent Resists Home Care", "when-a-parent-resists-home-care", "Remove redirect before publish"],
                ["Jul 8", "2026-07-08", "Private vs. Public Home Care in Ontario", "private-vs-public-home-care-ontario", "Before OHIP deep dive"],
                ["Jul 15", "2026-07-15", "Understanding Ontario Health atHome", "ontario-health-athome-funded-care", ""],
                ["Jul 22", "2026-07-22", "How to Choose a Home Care Provider in Ontario", "choosing-home-care-provider-ontario", ""],
                ["Jul 29", "2026-07-29", "Questions to Ask Before Hiring Home Care", "questions-before-hiring-home-care", "Remove redirect before publish"],
            ],
        )
    )

    parts.append(heading("August 2026 — Family Caregiver Support", 3))
    parts.append(
        table(
            ["Week of", "Date", "Article", "Slug"],
            [
                ["Aug 5", "2026-08-05", "Balancing Work and Caregiving", "balancing-work-and-caregiving"],
                ["Aug 12", "2026-08-12", "The Emotional Impact of Caring for Aging Parents", "emotional-impact-caregiving"],
                ["Aug 19", "2026-08-19", "How Families Can Share Care Responsibilities", "sharing-care-responsibilities"],
            ],
        )
    )

    parts.append(heading("September 2026 — Dementia & Memory Care", 3))
    parts.append(
        table(
            ["Week of", "Date", "Article", "Slug"],
            [
                ["Sep 2", "2026-09-02", "Managing Behaviour Changes in Dementia", "managing-dementia-behaviour-changes"],
                ["Sep 9", "2026-09-09", "Communication Strategies for Dementia", "communication-strategies-dementia"],
                ["Sep 16", "2026-09-16", "Late Stage Dementia: What Families Need to Know", "late-stage-dementia"],
            ],
        )
    )
    parts.append(para("Phase B complete: ~2026-09-16 · Cumulative (A+B): 15 new articles"))

    parts.append(heading("Phase C — Cluster depth (Sep 2026 – Feb 2027)", 2))
    phase_c = [
        ["Sep 23", "2026-09-23", "How to Keep Someone with Dementia Safe at Home", "Dementia", "Dem #7"],
        ["Sep 30", "2026-09-30", "Helping Aging Parents Stay Independent", "Navigating", "Nav #15"],
        ["Oct 7", "2026-10-07", "Preparing for Decline Conversations", "Caregiver", "Care #9"],
        ["Oct 14", "2026-10-14", "When Should Someone with Dementia Stop Driving?", "Dementia", "Dem #8"],
        ["Oct 21", "2026-10-21", "How Many Hours of Care Are Needed", "Navigating", "Nav #23"],
        ["Oct 28", "2026-10-28", "Caregiving and Mental Health", "Caregiver", "Care #13"],
        ["Nov 4", "2026-11-04", "Creating Routines for Dementia Patients", "Dementia", "Dem #10"],
        ["Nov 11", "2026-11-11", "Preventing Hospital Readmissions", "Navigating", "Nav #30"],
        ["Nov 18", "2026-11-18", "Caregiver Support Resources in Toronto", "Caregiver", "Care #16"],
        ["Nov 25", "2026-11-25", "How Dementia Affects Sleep", "Dementia", "Dem #11"],
        ["Dec 2", "2026-12-02", "Companionship and Senior Isolation", "Navigating", "Nav #22"],
        ["Dec 9", "2026-12-09", "Hospital Discharge Planning for Dementia", "Dementia", "Dem #14"],
        ["Dec 16", "2026-12-16", "SKIP (buffer / holidays)", "—", "—"],
        ["Dec 23", "2026-12-23", "SKIP", "—", "—"],
        ["Dec 30", "2026-12-30", "SKIP", "—", "—"],
        ["Jan 6", "2027-01-06", "Planning Family Meetings Around Care", "Caregiver", "Care #18"],
        ["Jan 13", "2027-01-13", "Helping Someone with Dementia Bathe Safely", "Dementia", "Dem #15"],
        ["Jan 20", "2027-01-20", "Medication Reminders for Seniors", "Navigating", "Nav #18"],
        ["Jan 27", "2027-01-27", "Supporting Seniors After Surgery", "Navigating", "Nav #31"],
        ["Feb 3", "2027-02-03", "When Dementia Care Requires 24-Hour Support", "Dementia", "Dem #16"],
        ["Feb 10", "2027-02-10", "How to Create a Care Plan for Parents", "Navigating", "Nav #32"],
        ["Feb 17", "2027-02-17", "When Family Caregiving Becomes Too Much", "Caregiver", "Care #15"],
    ]
    parts.append(table(["Week of", "Date", "Article", "Cluster", "Map #"], phase_c))

    parts.append(heading("Phase D — Brain Injury cluster seed (Mar–May 2027)", 2))
    phase_d = [
        ["Mar 3", "2027-03-03", "Life After Acquired Brain Injury: A Family Guide", "BI #1"],
        ["Mar 10", "2027-03-10", "Stroke Recovery at Home: What to Expect", "BI #2"],
        ["Mar 17", "2027-03-17", "Cognitive and Emotional Changes After Brain Injury", "BI #3"],
        ["Mar 24", "2027-03-24", "Returning Home After Rehabilitation", "BI #4"],
        ["Mar 31", "2027-03-31", "What Does a Rehabilitation Support Worker Do?", "BI #5"],
        ["Apr 7", "2027-04-07", "Mobility Support After Surgery or Illness", "BI #6"],
        ["Apr 14", "2027-04-14", "Brain Injury Fatigue Explained", "BI #7"],
        ["Apr 21", "2027-04-21", "Memory Problems After Brain Injury", "BI #13"],
        ["Apr 28", "2027-04-28", "Insurance-Funded Brain Injury Support", "BI #18"],
        ["May 5", "2027-05-05", "Brain Injury Recovery Timeline", "BI #19"],
    ]
    parts.append(table(["Week of", "Date", "Article", "Map #"], phase_d))

    parts.append(heading("Phase E — Cost of Care (June 2027+)", 2))
    parts.append(para("Prerequisites: hub page, sitemap, /resources/ hub, footer nav, 02-CONTENT-CLUSTERS → LIVE"))
    parts.append(
        table(
            ["Order", "Article", "Slug"],
            [
                ["1", "Average Home Care Costs in Toronto", "average-home-care-costs-toronto"],
                ["2", "Long-Term Care vs. Home Care: Costs Compared", "TBD"],
                ["3", "How Families Pay for Home Care", "TBD"],
                ["4", "Insurance Coverage for Home Care in Ontario", "TBD"],
            ],
        )
    )

    parts.append(heading("Monthly overview", 2))
    parts.append(
        table(
            ["Month", "Articles", "Focus"],
            [
                ["Jun 2026", "4", "Master Prompt #7–10"],
                ["Jul 2026", "5", "Navigating former stubs"],
                ["Aug 2026", "3", "Caregiver former stubs"],
                ["Sep 2026", "3", "Dementia former stubs"],
                ["Oct 2026", "4", "Cluster depth (mixed)"],
                ["Nov 2026", "4", "Cluster depth"],
                ["Dec 2026", "1 + 3 SKIP", "Light month; buffer"],
                ["Jan 2027", "4", "Cluster depth"],
                ["Feb 2027", "3", "Cluster depth wrap"],
                ["Mar–May 2027", "10", "Brain Injury seed"],
                ["Jun 2027+", "TBD", "Cost cluster (after hub build)"],
            ],
        )
    )

    parts.append(heading("Quick reference — next 4 weeks", 2))
    parts.append(
        table(
            ["Date", "Article"],
            [
                ["2026-06-03", "MP #7 — Navigating the System"],
                ["2026-06-10", "MP #8 — The Guilt of Getting Help"],
                ["2026-06-17", "MP #9 — When the Situation Changes Overnight"],
                ["2026-06-24", "MP #10 — What Trust Actually Means"],
            ],
        )
    )

    parts.append(heading("Published log", 2))
    parts.append(
        table(
            ["Published", "Article", "Actual date", "URL"],
            [["(none yet)", "", "", ""]],
        )
    )

    return "".join(parts)


CONTENT_TYPES = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>"""

RELS_ROOT = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>"""

RELS_DOC = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>
</Relationships>"""

STYLES = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="{NS_W}">
  <w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault></w:docDefaults>
  <w:style w:type="paragraph" w:styleId="Heading1" w:default="0"><w:name w:val="heading 1"/><w:pPr><w:keepNext/><w:spacing w:before="240" w:after="120"/></w:pPr><w:rPr><w:b/><w:sz w:val="32"/><w:szCs w:val="32"/><w:color w:val="8B0000"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2" w:default="0"><w:name w:val="heading 2"/><w:pPr><w:keepNext/><w:spacing w:before="200" w:after="80"/></w:pPr><w:rPr><w:b/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading3" w:default="0"><w:name w:val="heading 3"/><w:pPr><w:keepNext/><w:spacing w:before="160" w:after="60"/></w:pPr><w:rPr><w:b/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="ListParagraph" w:default="0"><w:name w:val="List Paragraph"/></w:style>
</w:styles>"""

NUMBERING = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="{NS_W}">
  <w:abstractNum w:abstractNumId="0">
    <w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="720" w:hanging="360"/></w:pPr></w:lvl>
  </w:abstractNum>
  <w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
</w:numbering>"""

CORE = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
  xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>Arcadia Home Care — Publishing Calendar</dc:title>
  <dc:creator>Arcadia Home Care</dc:creator>
  <dc:description>Week-by-week article publish schedule</dc:description>
  <dcterms:created xsi:type="dcterms:W3CDTF">2026-05-25T00:00:00Z</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">2026-05-25T00:00:00Z</dcterms:modified>
</cp:coreProperties>"""

APP = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
  <Application>Python</Application>
</Properties>"""


def main() -> None:
    body = build_body()
    document = (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w:document xmlns:w="{NS_W}" xmlns:r="{NS_R}">'
        f"<w:body>{body}<w:sectPr><w:pgSz w:w='12240' w:h='15840'/>"
        "<w:pgMar w:top='1440' w:right='1440' w:bottom='1440' w:left='1440'/></w:sectPr>"
        "</w:body></w:document>"
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("[Content_Types].xml", CONTENT_TYPES)
        zf.writestr("_rels/.rels", RELS_ROOT)
        zf.writestr("word/_rels/document.xml.rels", RELS_DOC)
        zf.writestr("word/document.xml", document)
        zf.writestr("word/styles.xml", STYLES)
        zf.writestr("word/numbering.xml", NUMBERING)
        zf.writestr("docProps/core.xml", CORE)
        zf.writestr("docProps/app.xml", APP)

    print(f"Wrote {OUT} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
