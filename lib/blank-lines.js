const rule = require('unified-lint-rule');
const visit = require('unist-util-visit');
const generated = require('unist-util-generated');
const position = require('unist-util-position');

function isApplicable(node) {
  return [
    'paragraph',
    'heading',
    'list',
  ].indexOf(node.type) !== -1;
}

function blankLines(tree, file) {
  visit(tree, (node, index, parent) => {
    const next = parent && parent.children[index + 1];

    if (generated(node)) {
      return;
    }

    if (next && isApplicable(node) && isApplicable(next)) {
      if (node.type === 'heading' && next.type === 'heading') {
        if (position.start(next).line !== position.end(node).line + 2) {
          file.message('Incorrect number of blank lines between headings', node);
        }
      } else if (node.type === 'heading' && next.type !== 'heading') {
        if (position.start(next).line - position.end(node).line !== 2) {
          file.message('Incorrect number of blank lines between heading and section', node);
        }
      } else if (node.type === 'list') {
        if (position.start(next).line - position.end(node).line !== 3) {
          file.message('Incorrect number of blank lines between last section and next heading', node);
        }
      }
    }
  });
}

module.exports = rule('remark-lint:blank-lines-1-0-2', blankLines);
