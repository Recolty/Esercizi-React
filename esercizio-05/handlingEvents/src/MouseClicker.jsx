export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }

  function handleSrcPrint(e){
    console.log(e.target.src)
  }

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        <img width={170} src="https://ms.yugipedia.com//7/7a/FluffalCat-MADU-EN-VG-artwork.png" onClick={handleSrcPrint}></img>
        Click me
      </button>
    </div>
  );
}
