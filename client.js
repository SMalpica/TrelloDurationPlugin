window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: 'Gestionar tiempo',
      callback: function(t) {
        return t.popup({
          title: 'Gestión de tiempo',
          url: 'index.html',
          height: 300
        });
      }
    }];
  }
});
