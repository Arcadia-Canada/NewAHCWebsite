# Leadership team photos

Used on `/about/leadership`. All paths are relative to `public/`, so `/images/team/name.png` = `public/images/team/name.png`.

**Expected files:**

| File | Person |
|------|--------|
| rohit-tamhane.png | Rohit Tamhane (Founder) |
| melissa-vigar.jpg | Melissa Vigar — add manually if missing (old site may block download) |
| peter-glazer.png | Peter Glazer |
| dyan-tan.png | Dyan Tan |
| glady-may-abogado.png | Glady May Abogado |
| julie-ann-hayar.png | Julie Ann Hayar |

**Melissa Vigar:** The code currently uses `photo: null` (initials) because the old site returned 403 when downloading her image. After you add `melissa-vigar.jpg` here, set her `photo` in `app/about/leadership/page.tsx` to `'/images/team/melissa-vigar.jpg'`.
