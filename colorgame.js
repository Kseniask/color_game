$(function () {
  var numOfSquares = 6
  var i = 0
  var colors = generateColors(numOfSquares)
  var pickedColor = colors[pickColor()]
  var colorDisplay = $('#colorDisplay')
  var clickedColor

  var resetBtn = $('#reset')
  var squares = $('.square')
  var easyBtn = $('#easy')
  var hardBtn = $('#hard')

  init()

  function init () {
    setupButtons()
    setupSquares()
  }

  colorDisplay.append(pickedColor.toString())
  resetBtn.click(function () {
    reset(numOfSquares)
    i = 0
    squares.each(function () {
      $(this).css('backgroundColor', colors[i])
      i++
    })
  })

  function setupButtons () {
    easyBtn.click(function () {
      numOfSquares = 3
      reset(numOfSquares)
      for (var j = 0; j < squares.length; j++) {
        if (j < 3) {
          console.log(squares[j])
          squares[j].style.backgroundColor = colors[j]
        } else {
          squares[j].style.display = 'none'
        }
      }
    })

    hardBtn.click(function () {
      numOfSquares = 6
      reset(numOfSquares)

      for (var j = 0; j < squares.length; j++) {
        if (j >= 3) {
          squares[j].style.display = 'block'
        }
        squares[j].style.backgroundColor = colors[j]
      }
    })
  }

  function setupSquares () {
    squares.each(function () {
      $(this).css('backgroundColor', colors[i])
      i++
      $(this).click(function () {
        clickedColor = $(this).css('backgroundColor')
        if (clickedColor == pickedColor) {
          resetBtn.text('Play Again?')
          $('#message').text('Correct!')
          changeAllColors(clickedColor)
        } else {
          $(this).css('backgroundColor', '#232323')
          $('#message').text('Try Again!')
        }
      })
    })
  }
  function reset (numOfSquares) {
    resetBtn.text('New Colors')
    $('#message').text('')
    $('#title').css('backgroundColor', 'steelblue')
    $(this).addClass('selected')
    $('#easy').removeClass('selected')
    colors = generateColors(numOfSquares)
    pickedColor = colors[pickColor()]
  }

  function changeAllColors (color) {
    $('#title').css('backgroundColor', color)
    squares.each(function () {
      $(this).css('backgroundColor', color)
    })
  }
  function pickColor () {
    return Math.floor(Math.random() * colors.length)
  }

  function generateColors (num) {
    var arr = []
    for (var i = 0; i < num; i++) {
      arr[i] = randomColor()
    }
    return arr
  }
  function randomColor () {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')'
    console.log(color)
    return color
  }
})
