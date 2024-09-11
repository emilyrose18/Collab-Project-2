# Collab-Project-2

In `res.render(view, locals)`, the **second argument (`locals`)** is an object containing data you want to pass to the Handlebars template. This data can be accessed in the template using Handlebars' `{{}}` syntax.

### Example:

```js
app.get("/", (req, res) => {
  res.render("home", { title: "My Handlebars App", message: "Hello World!" });
});
```

### In the Template (`home.handlebars`):

```html
<h1>{{title}}</h1>
<!-- Displays 'My Handlebars App' -->
<p>{{message}}</p>
<!-- Displays 'Hello World!' -->
```

- **`title: 'My Handlebars App'`**: Passed as `{{title}}` in the template.
- **`message: 'Hello World!'`**: Passed as `{{message}}`.
  The second argument is simply a way to inject dynamic content into your template.
