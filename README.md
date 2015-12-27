# remark-lint-blank-lines-1-0-2

This [remark-lint](https://github.com/wooorm/remark-lint) rule was created for [free-programming-books-lint](https://github.com/vhf/free-programming-books-lint) to enforce [free-programming-books](https://github.com/vhf/free-programming-books) [formatting guidelines](https://github.com/vhf/free-programming-books/blob/master/CONTRIBUTING.md#formatting).

This rule ensures that a file has

- 2 empty lines between last link and new section
- 1 empty line between heading & first link of its section
- 0 empty line between two list items
- 1 empty line at the end of each .md file

```Text
<!-- Invalid -->

[...]
* [An Awesome Book](http://example.com/example.html)

### Example
* [Another Awesome Book](http://example.com/book.html)

* [Some Other Book](http://example.com/other.html)

<!-- Valid -->

[...]
* [An Awesome Book](http://example.com/example.html)


### Example

* [Another Awesome Book](http://example.com/book.html)
* [Some Other Book](http://example.com/other.html)
```

## Using the rule

### Via `.remarkrc`

```bash
npm install -g remark
npm install -g remark-lint
npm install remark-lint-blank-lines-1-0-2 # local install!
```

Then, set up your `.remarkrc`:

```JSON
{
  "plugins": {
    "remark-lint": {
      "external": ["remark-lint-blank-lines-1-0-2"]
    }
  }
}
```

Now you can use the following command to run the lint:

```bash
remark --no-stdout xxx.md
```

### Via CLI

```bash
npm install -g remark
npm install -g remark-lint
npm install -g remark-lint-blank-lines-1-0-2 # global install!
remark --no-stdout -u remark-lint="external:[\"remark-lint-blank-lines-1-0-2\"]" xxx.md
```

Note that the `lint=<lint_options>` option only works with `remark >= 1.1.1`.

This `README.md` is based on [this one](https://github.com/chcokr/mdast-lint-sentence-newline/blob/250b106c9e19b387270099cf16f17a84643f8944/README.md) by [@chcokr](https://github.com/chcokr) (MIT).
