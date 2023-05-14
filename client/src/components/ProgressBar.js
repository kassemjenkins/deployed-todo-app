const ProgressBar = ({progress}) => {

    const colors = [
      'rgb(255, 0, 0)',
      'rgb(255, 128, 0)',
      'rgb(255, 255, 0)',
      'rgb(128, 255, 0)',
    ]

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div className="outer-bar">
        <div 
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: randomColor}}
        >

        </div>
      </div>
    )
  
  }
  
  export default ProgressBar;