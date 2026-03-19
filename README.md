# Alexander Agbu - Professional Portfolio

A modern, responsive portfolio website showcasing data science expertise, projects, publications, and professional experience.

## 🚀 Quick Start - Deploy to Netlify

### Method 1: Drag and Drop (Easiest - 2 minutes)

1. **Go to [Netlify](https://netlify.com)** and sign up/login (free account)

2. **Prepare your files:**
   - Download all files from this portfolio folder
   - Make sure you have: `index.html`, `styles.css`, `data.js`, `script.js`, `netlify.toml`, and the `assets` folder

3. **Deploy:**
   - On Netlify dashboard, find the drag-and-drop area that says "Want to deploy a new site without connecting to Git? Drag and drop your site folder here"
   - Drag your entire portfolio folder onto that area
   - Wait 30 seconds for deployment
   - **Done!** Your site is live at `https://random-name.netlify.app`

4. **Customize domain (optional):**
   - Click "Site settings" → "Change site name"
   - Change to something like `alexagbu` → Your site becomes `https://alexagbu.netlify.app`
   - OR connect a custom domain you own

### Method 2: GitHub + Netlify (Best for version control)

1. **Create GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository called `portfolio`
   - Upload all portfolio files to the repository

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select your `portfolio` repository
   - Click "Deploy site"

3. **Benefits:**
   - Every time you push changes to GitHub, Netlify automatically rebuilds your site
   - Version control for all changes
   - Easy rollback if needed

## 📝 How to Update Your Portfolio

All your content is in **one file**: `data.js`

### Update Experience

Open `data.js` and edit the `experience` array:

```javascript
experience: [
    {
        title: "Your New Job Title",
        company: "Company Name",
        location: "City, Country",
        period: "Month Year - Present",
        description: "What you did and achieved...",
        tags: ["Skill1", "Skill2", "Skill3"]
    },
    // Add more jobs...
]
```

### Add New Projects

In `data.js`, add to the `projects` array:

```javascript
projects: [
    {
        title: "Your Project Name",
        description: "What it does and the impact...",
        tech: ["Python", "SQL", "Power BI"],
        icon: "📊", // Any emoji
        link: "https://github.com/yourproject" // or null
    },
    // Add more projects...
]
```

### Add Publications

In `data.js`, add to the `publications` array:

```javascript
publications: [
    {
        type: "Journal Article", // or "Conference Paper"
        title: "Your Paper Title",
        authors: "You, Co-author",
        venue: "Journal Name",
        year: "2025",
        link: "https://link-to-paper.com",
        doi: "10.xxxx/xxxxx" // optional
    },
    // Add more publications...
]
```

### Add Blog Posts

In `data.js`, add to the `blog` array:

```javascript
blog: [
    {
        title: "Your Blog Post Title",
        date: "Month Year",
        category: "Category Name",
        excerpt: "Short description...",
        link: "https://link-to-post.com"
    },
    // Add more posts...
]
```

### Update Skills

In `data.js`, edit the `skills` array:

```javascript
skills: [
    {
        category: "Category Name",
        icon: "🤖", // Any emoji
        items: ["Skill1", "Skill2", "Skill3", "Skill4"]
    },
    // Add more categories...
]
```

## 🎨 Customization

### Change Colors

Edit `styles.css` at the top (CSS Variables section):

```css
:root {
    --primary: #2563eb;        /* Main blue color */
    --primary-dark: #1e40af;   /* Darker blue */
    --primary-light: #60a5fa;  /* Lighter blue */
    /* Change these to your preferred colors */
}
```

### Change Profile Picture

Replace `assets/profile.jpg` with your new photo (keep the same filename)

### Update CV

Replace `assets/Alexander_Agbu_CV.pdf` with your updated CV (keep the same filename)

## 📱 Features

✅ Fully responsive (works on mobile, tablet, desktop)
✅ Professional design with blues & grays color scheme
✅ Smooth animations and transitions
✅ Interactive navigation
✅ Contact form (powered by Netlify Forms)
✅ Fast loading and optimized
✅ SEO-friendly
✅ Easy to update content

## 🔧 Local Development

To test changes locally before deploying:

1. Open `index.html` directly in your browser
   - Or use a local server for better testing

2. Using Python (if installed):
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000`

3. Using VS Code:
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

## 📦 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── data.js            # Your portfolio content (EDIT THIS!)
├── script.js          # Interactive functionality
├── netlify.toml       # Netlify configuration
├── assets/
│   ├── profile.jpg    # Your photo
│   └── Alexander_Agbu_CV.pdf  # Your CV
└── README.md          # This file
```

## 🎯 After Deployment Checklist

- [ ] Site is live and accessible
- [ ] All sections load correctly
- [ ] Images display properly
- [ ] CV download works
- [ ] Contact form works (send a test message)
- [ ] Links to LinkedIn, GitHub, ORCID, ResearchGate work
- [ ] Mobile view looks good (test on phone)
- [ ] Custom domain set up (optional)

## 🚨 Troubleshooting

**Site not loading?**
- Check that all files are uploaded
- Verify `index.html` is in the root folder
- Check Netlify deploy logs for errors

**Images not showing?**
- Ensure images are in the `assets` folder
- Check file names match exactly (case-sensitive)

**Contact form not working?**
- Form must be deployed to Netlify (doesn't work locally)
- Check Netlify dashboard → Forms section

**Changes not appearing?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for Netlify to rebuild

## 📞 Need Help?

- Netlify Support: https://docs.netlify.com
- HTML/CSS/JS Reference: https://developer.mozilla.org

## 📄 License

This portfolio is for Alexander Agbu. Feel free to use the structure for your own portfolio, but please don't copy content verbatim.

---

**Built with:** HTML, CSS, JavaScript
**Hosted on:** Netlify
**Last Updated:** March 2025
