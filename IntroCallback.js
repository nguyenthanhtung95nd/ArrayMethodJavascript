// ************************************************* Note 1 *************************************************
function loadScript(src, callback) {
    // create <script>
    let script = document.createElement('script');
    script.src = src;
    // the callback runs after the script is loaded
    script.onload = () => callback(script);
    // Handling errors
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script1 => {
    alert(`Cool, the ${script1.src} is loaded`);
    alert(_); // function declared in the loaded script
});

// ************************************************* Note 2 *************************************************
// Callback in callback
// Solution 1:
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function (script) {

    alert(`Cool, the ${script.src} is loaded, let's load one more`);

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function (script) {
        alert(`Cool, the second script is loaded`);
    });

});

// Solution 2:
loadScript('/my/script.js', function(error, script) {
    if (error) {
      // handle error
      alert('file not found!')
    } else {
      // script loaded successfully
    }
});

// ************************************************* Note 3 *************************************************
// Pyramid of Doom
// Solution 1:
// In the code above:
// We load 1.js, then if there’s no error.
// We load 2.js, then if there’s no error.
// We load 3.js, then if there’s no error – do something else (*).
// ===> That’s sometimes called “callback hell”

loadScript('1.js', function (error, script) {

    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js', function (error, script) {
            if (error) {
                handleError(error);
            } else {
                // ...
                loadScript('3.js', function (error, script) {
                    if (error) {
                        handleError(error);
                    } else {
                        // ...continue after all scripts are loaded (*)
                    }
                });

            }
        })
    }
});

// ===> So this way of coding isn’t very good.
loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
};