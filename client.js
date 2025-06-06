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
  },
  'card-back-section': function(t, options) {
    return [{
      title: 'Tiempo dedicado',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Clock-icon-blue.png/32px-Clock-icon-blue.png',
      content: {
        type: 'iframe',
        url: 'index.html',
        height: 300
      }
    }];
  }
});
