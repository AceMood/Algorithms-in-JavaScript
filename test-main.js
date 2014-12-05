var tests = [];
for (var file in window.__karma__.files) {

    console.log(file);

    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/-spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}