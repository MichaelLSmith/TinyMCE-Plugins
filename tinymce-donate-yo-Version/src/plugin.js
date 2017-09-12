console.log('hello from plugin.js');
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
  let select = e.data.destination;

  if(!select) {
    alert('please select a destination');
  }
  else if(select === 1) {
    //internal donate url
    tinymce.activeEditor.execCommand('mceInsertContent', false,
    `<a href="${wpURL}/donate"><button type="button" class="btn-purple">Donate</button></a>`
    );
  }
  else if(select = 2) {
    tinymce.activeEditor.execCommand('mceInsertContent', false,
    `<a href=${canadahelps} target="_blank"><button type="button" class="btn-purple">Donate</button></a>`
    );
  }
}

const plugin = (editor) => {
  console.log('in plugin');
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
                { text: 'Donate Page', value: 1 },
                { text: 'Canada Helps', value: 2 }
              ]
            }
          ],
        onsubmit: handleSubmit
      })
    });
  }

export default plugin;
