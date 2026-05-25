import fs from 'node:fs'
import path from 'node:path'

const GUIDE_PATH = path.join(
  process.cwd(),
  'app/resources/brain-injury-rehabilitation/brain-injury-behaviour-changes/brain_injury_interactive_guide.html',
)

export type GuideAssets = {
  styles: string
  bodyHtml: string
  script: string
}

export function loadGuideHtml(): GuideAssets {
  const raw = fs.readFileSync(GUIDE_PATH, 'utf8')
  const styles = raw.match(/<style>([\s\S]*?)<\/style>/)?.[1]?.trim() ?? ''
  const bodyHtml = raw.match(/<body>([\s\S]*?)<\/body>/i)?.[1]?.trim() ?? ''
  const script = raw.match(/<script>([\s\S]*?)<\/script>/i)?.[1]?.trim() ?? ''
  return { styles, bodyHtml, script }
}
