it('test html fixture', function() {

    var div = document.getElementById('example');
    expect(div.tagName.toLowerCase()).toBe('div');

});