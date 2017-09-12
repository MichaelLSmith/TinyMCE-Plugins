(function() {
  console.log('testing');
  var baseUrl = window.location.origin;
  var host = window.location.host;
  var pathArray = window.location.pathname.split( '/' );
  console.log(baseUrl, host, pathArray);
  var wpURL = baseUrl + '/' + pathArray[1];
  // on Bitnami localhost, need to use wpURL
  //for staging and live site just need base_url
  var canadahelps =
    'https://www.canadahelps.org/en/charities/elis-place-residential-treatment-and-transition-centre/'

  function handleSubmit(e) {
    console.log(e);
    select = e.data.destination;
    if(!select) {
      alert('please select a destination');
    }
    else if(select === 0) {
      //internal donate url
      tinymce.activeEditor.execCommand('mceInsertContent', false,
      `<a href="${wpURL}/donate"><button type="button" class="btn-purple">Donate</button></a>`
      );
    }
    else if(select = 1) {
      tinymce.activeEditor.execCommand('mceInsertContent', false,
      `<a href=${canadahelps} target="_blank"><button type="button" class="btn-purple">Donate</button></a>`
      );
    }
  }

  tinymce.PluginManager.add( 'button_class',
    function( editor, url ) {
      editor.addButton('button_class', {
        title: 'Insert Button',
        cmd: 'button_class',
      });
      editor.addCommand('button_class',
        function() {
          // console.log(tinymce);
          tinymce.activeEditor.windowManager.open({
            title: 'Insert Donate Button',
            body:
              [
                {
                  type: 'container',
                  label: 'Instructions',
                  html: '<p>Select either the donate page on the site or the Canada Help page.</p>'
                },
                {
                  type: 'listbox',
                  name: 'destination',
                  label: 'Button Destination',
                  values: [
                    { text: 'Donate Page', value: 0 },
                    { text: 'Canada Helps', value: 1 }
                  ]
                }
              ],
            onsubmit: handleSubmit
          })
        });
    });
})();

//good tutorial on dialogs with tinymce:
//https://makina-corpus.com/blog/metier/2016/how-to-create-a-custom-dialog-in-tinymce-4
