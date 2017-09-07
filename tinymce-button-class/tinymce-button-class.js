(function() {
  var base_url = window.location.origin;
  var host = window.location.host;
  var pathArray = window.location.pathname.split( '/' );
  console.log(base_url, host, pathArray);
  var wpURL = base_url + '/' + pathArray[1];
  // console.log(wpURL);
  //for staging and live site just need base_url



    tinymce.PluginManager.add( 'button_class',
      function( editor, url ) {
        editor.addButton('button_class', {
          title: 'Insert Button',
          cmd: 'button_class',
        });
        editor.addCommand('button_class',
          function() {
            //Insert selected text back into editor, wrapping it in an anchor tag
            editor.execCommand('mceInsertContent', false,
          `<a href="${wpURL}/donate"><button type="button" class="btn-purple">Donate</button></a>`
        );
          });
      });
})();

//'wpURL +'/donate
