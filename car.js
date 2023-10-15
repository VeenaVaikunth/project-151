// Registering component in log-component.js
AFRAME.registerComponent('car', {
    schema: {
      moveX: {type: 'number', default: 0},
    },
    init: function() {
        window.addEventListener('click', (e) => {
            this.data.moveX = this.data.moveX + 0.05;
        })
        var pos = this.el.getAttribute('position');
        pos.x = pos.x + this.data.moveX;
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
    }
  });