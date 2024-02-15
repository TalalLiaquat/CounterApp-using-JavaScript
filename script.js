  let count = 0;
  
  function render() {
    document.getElementById('count').innerText = count;
  }
  
  function increment() {
    count++;
    render();
  }
  
  function decrement() {
    if (count > 0) {
      count--;
      render();
    }
  }
  
  function reset() {
    count = 0;
    render();
  }