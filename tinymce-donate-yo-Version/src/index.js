import plugin from './plugin';
console.log('hello from index.js');


(function() {
  console.log('hello from self calling function');
  console.log('plugin:', plugin);
  tinymce.PluginManager.add('button_class', plugin);
})()
