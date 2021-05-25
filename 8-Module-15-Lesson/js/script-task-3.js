/**
 * Create accordion
 */

const treeRef = document.querySelector('.tree');

treeRef.addEventListener('click', event => {
  if (!event.target.classList.contains('tree__item')) return;

  const subTreeRef = event.target.querySelector('.tree__sub-tree');
  if (!subTreeRef) return;

  if (subTreeRef.classList.contains('tree__sub-tree_open')) {
    subTreeRef.querySelectorAll('.tree__sub-tree').forEach(ref => {
      ref.classList.remove('tree__sub-tree_open');
    });
  }

  subTreeRef.classList.toggle('tree__sub-tree_open');
});
