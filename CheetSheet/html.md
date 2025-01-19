Here’s a cheat sheet that includes the examples provided earlier, with the addition of various `href` usage scenarios, including redirection to apps, Instagram, phone numbers, mobile URLs, and more. It also includes multiple `iframe` embedding examples.

---

### **HTML Cheat Sheet with Common Tags and Attributes**

#### **1. Basic HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cheat sheet of HTML tags and attributes.">
    <meta name="keywords" content="HTML, cheat sheet, tags, attributes">
    <meta name="author" content="Your Name">
    <title>HTML Tags Cheat Sheet</title>
</head>
<body>
    <header>
        <h1>HTML Tags Cheat Sheet</h1>
    </header>
```

---

#### **2. Meta Tags**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="This is a page to demonstrate useful HTML tags and attributes.">
<meta name="keywords" content="HTML, tags, attributes, tutorial">
<meta name="author" content="Your Name">
<meta property="og:title" content="HTML Cheat Sheet">
<meta property="og:description" content="Learn useful HTML tags and attributes.">
<meta property="og:image" content="thumbnail.jpg">
<meta property="og:url" content="https://www.example.com">
```

---

#### **3. Links with `href` Attribute**
##### **Regular Link**
```html
<a href="https://www.example.com">Visit Example Website</a>
```

##### **Redirect to Instagram App**
```html
<a href="instagram://user?username=exampleusername">Open Instagram App</a>
```

##### **Phone Number Link**
```html
<a href="tel:+1234567890">Call Now: +1 234 567 890</a>
```

##### **Email Link**
```html
<a href="mailto:your-email@example.com">Email Us</a>
```

##### **Redirect to WhatsApp**
```html
<a href="https://wa.me/1234567890?text=Hello!">Chat on WhatsApp</a>
```

##### **Redirect to a Mobile App (iOS/Android)**
```html
<!-- For Android -->
<a href="intent://example.com/#Intent;scheme=http;package=com.example.app;end">Open Android App</a>

<!-- For iOS -->
<a href="itms-apps://itunes.apple.com/app/id123456789">Open iOS App</a>
```

##### **Redirect to a Mobile Website**
```html
<a href="https://m.example.com">Visit Mobile Version</a>
```

##### **Open a Link in a New Tab**
```html
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Open Example in New Tab</a>
```

---

#### **4. Image with `img` Tag**
```html
<img src="image.jpg" alt="Sample Image" width="300" height="200" loading="lazy">
```

---

#### **5. Video with `video` Tag**
```html
<video controls autoplay muted loop poster="video-thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>
```

---

#### **6. Audio with `audio` Tag**
```html
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>
```

---

#### **7. Form with `form` Tag**
```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" required>
    <br>
    <button type="submit">Submit</button>
</form>
```

---

#### **8. Table Example**
```html
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
        </tr>
    </tbody>
</table>
```

---

#### **9. Blockquote Example**
```html
<blockquote cite="https://www.example.com">
    "This is a famous quote from the example website."
</blockquote>
<cite>– Example Author</cite>
```

---

#### **10. Iframe Examples**
##### **Embed an External Website**
```html
<iframe src="https://www.example.com" width="600" height="400" title="Example Iframe"></iframe>
```

##### **Embed YouTube Video**
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

##### **Embed Google Maps**
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

##### **Embed PDF Viewer**
```html
<iframe src="example.pdf" width="600" height="500" frameborder="0"></iframe>
```

##### **Embed a Social Media Post**
```html
<iframe src="https://www.instagram.com/p/CUSTOM_POST_ID/embed" width="600" height="600" frameborder="0" allowfullscreen=""></iframe>
```

---

#### **11. Custom Data Attributes**
```html
<div data-user-id="12345" data-role="admin">
    User ID: 12345, Role: Admin
</div>
```

---

#### **12. Contenteditable Attribute**
```html
<div contenteditable="true">You can edit this text.</div>
```

---

#### **13. Language Attribute**
```html
<p lang="en">This text is in English.</p>
<p lang="fr">Ce texte est en français.</p>
```

---

#### **14. Footer with Contact Info**
```html
<footer>
    <p>Created by Your Name</p>
    <p>Contact: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
</footer>
```

---

#### **15. Redirect to Another URL with `meta` Tag (For SEO)**
```html
<meta http-equiv="refresh" content="5;url=https://www.example.com">
```

---

### **Summary of Common Attributes**
- `target="_blank"`: Opens a link in a new tab.
- `rel="noopener noreferrer"`: Used with `target="_blank"` to enhance security.
- `download`: Used with `<a>` to trigger file downloads.
- `tel:`: Used in `<a>` to initiate a phone call.
- `mailto:`: Used in `<a>` to send an email.
- `contenteditable="true"`: Allows content to be edited by the user.
- `data-*`: Custom data attributes to store extra information on an element.

---

This cheat sheet provides a comprehensive overview of common HTML tags and attributes, with the added examples of `href` links for phone numbers, social media apps, and more. It also includes various `iframe` use cases and other helpful elements for web development.

---
Here’s a cheat sheet that includes the examples provided earlier, with the addition of various `href` usage scenarios, including redirection to apps, Instagram, phone numbers, mobile URLs, and more. It also includes multiple `iframe` embedding examples.

---

### **HTML Cheat Sheet with Common Tags and Attributes**

#### **1. Basic HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cheat sheet of HTML tags and attributes.">
    <meta name="keywords" content="HTML, cheat sheet, tags, attributes">
    <meta name="author" content="Your Name">
    <title>HTML Tags Cheat Sheet</title>
</head>
<body>
    <header>
        <h1>HTML Tags Cheat Sheet</h1>
    </header>
```

---

#### **2. Meta Tags**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="This is a page to demonstrate useful HTML tags and attributes.">
<meta name="keywords" content="HTML, tags, attributes, tutorial">
<meta name="author" content="Your Name">
<meta property="og:title" content="HTML Cheat Sheet">
<meta property="og:description" content="Learn useful HTML tags and attributes.">
<meta property="og:image" content="thumbnail.jpg">
<meta property="og:url" content="https://www.example.com">
```

---

#### **3. Links with `href` Attribute**
##### **Regular Link**
```html
<a href="https://www.example.com">Visit Example Website</a>
```

##### **Redirect to Instagram App**
```html
<a href="instagram://user?username=exampleusername">Open Instagram App</a>
```

##### **Phone Number Link**
```html
<a href="tel:+1234567890">Call Now: +1 234 567 890</a>
```

##### **Email Link**
```html
<a href="mailto:your-email@example.com">Email Us</a>
```

##### **Redirect to WhatsApp**
```html
<a href="https://wa.me/1234567890?text=Hello!">Chat on WhatsApp</a>
```

##### **Redirect to a Mobile App (iOS/Android)**
```html
<!-- For Android -->
<a href="intent://example.com/#Intent;scheme=http;package=com.example.app;end">Open Android App</a>

<!-- For iOS -->
<a href="itms-apps://itunes.apple.com/app/id123456789">Open iOS App</a>
```

##### **Redirect to a Mobile Website**
```html
<a href="https://m.example.com">Visit Mobile Version</a>
```

##### **Open a Link in a New Tab**
```html
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Open Example in New Tab</a>
```

---

#### **4. Image with `img` Tag**
```html
<img src="image.jpg" alt="Sample Image" width="300" height="200" loading="lazy">
```

---

#### **5. Video with `video` Tag**
```html
<video controls autoplay muted loop poster="video-thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>
```

---

#### **6. Audio with `audio` Tag**
```html
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>
```

---

#### **7. Form with `form` Tag**
```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" required>
    <br>
    <button type="submit">Submit</button>
</form>
```

---

#### **8. Table Example**
```html
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
        </tr>
    </tbody>
</table>
```

---

#### **9. Blockquote Example**
```html
<blockquote cite="https://www.example.com">
    "This is a famous quote from the example website."
</blockquote>
<cite>– Example Author</cite>
```

---

#### **10. Iframe Examples**
##### **Embed an External Website**
```html
<iframe src="https://www.example.com" width="600" height="400" title="Example Iframe"></iframe>
```

##### **Embed YouTube Video**
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

##### **Embed Google Maps**
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

##### **Embed PDF Viewer**
```html
<iframe src="example.pdf" width="600" height="500" frameborder="0"></iframe>
```

##### **Embed a Social Media Post**
```html
<iframe src="https://www.instagram.com/p/CUSTOM_POST_ID/embed" width="600" height="600" frameborder="0" allowfullscreen=""></iframe>
```

---

#### **11. Custom Data Attributes**
```html
<div data-user-id="12345" data-role="admin">
    User ID: 12345, Role: Admin
</div>
```

---

#### **12. Contenteditable Attribute**
```html
<div contenteditable="true">You can edit this text.</div>
```

---

#### **13. Language Attribute**
```html
<p lang="en">This text is in English.</p>
<p lang="fr">Ce texte est en français.</p>
```

---

#### **14. Footer with Contact Info**
```html
<footer>
    <p>Created by Your Name</p>
    <p>Contact: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
</footer>
```

---

#### **15. Redirect to Another URL with `meta` Tag (For SEO)**
```html
<meta http-equiv="refresh" content="5;url=https://www.example.com">
```

---

### **Summary of Common Attributes**
- `target="_blank"`: Opens a link in a new tab.
- `rel="noopener noreferrer"`: Used with `target="_blank"` to enhance security.
- `download`: Used with `<a>` to trigger file downloads.
- `tel:`: Used in `<a>` to initiate a phone call.
- `mailto:`: Used in `<a>` to send an email.
- `contenteditable="true"`: Allows content to be edited by the user.
- `data-*`: Custom data attributes to store extra information on an element.

---

This cheat sheet provides a comprehensive overview of common HTML tags and attributes, with the added examples of `href` links for phone numbers, social media apps, and more. It also includes various `iframe` use cases and other helpful elements for web development.

---

https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf

