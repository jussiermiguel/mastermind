let code = [];
let remaining = [];
const colors = ['red', 'yellow', 'green', 'blue'];
let counter = 1;
let counter2 = 1;
let won = false;

class Row {
  constructor() {
    this.turn = false;
    this.spaces = [];
  }
}

// create row instances
const row1 = new Row();
const row2 = new Row();
const row3 = new Row();
const row4 = new Row();
const row5 = new Row();
const row6 = new Row();
const row7 = new Row();
const row8 = new Row();
const row9 = new Row();
const row10 = new Row();


//generate random colors
for(i=0; i<4; i++) {
  code.push(colors[Math.floor(Math.random() * 4)]);
}

//create copy of code
let code1 = [...code];

// show random colors
function bgColor(e,c) {
  $(`${e}`).css('background-color', `${c}`);
}

// check the row
function checkRow(arr, row, next, prev) {
  // check if answer === code
  if(arr.join("") === code.join("")) {
    won = true;
    $('.code > span').slideDown();
    $('.header').text("Parabéns, você conseguiu").css('color', 'green');
    for(i=0; i<arr.length; i++) {
      $(`.dots${row} > .one${i + 1}`).css('background-color', 'black');
    }
    showRestartButton();
  } else {   
      // check for black pegs 
      for(i=0; i<arr.length; i++) {
        if(arr[i] === code[i]) {
          $(`.dots${row} > .one${counter2}`).css('background-color', 'black');
          code1.splice(i,1, "");
          remaining.push("empty");
          counter2 += 1;
        }  else {
             remaining.push(arr[i]);
        }
      }  
      //check for white pegs
      for(i=0; i<arr.length; i++) {
        if(code1.includes(remaining[i])) {
          code1.splice(code1.indexOf(remaining[i]), 1, "blank");  
          $(`.dots${row} > .one${counter2}`).css('background-color', 'white'); 
          counter2 += 1;
        }
      }
      //reset to defaults + switch turns
      counter = 1;
      counter2 = 1;
      next.turn = true;
      prev.turn = false;
      code1 = [...code];
      remaining = [];
  } 
}

// add background color of code to the divs
bgColor('.color-one', `${code[0]}`);
bgColor('.color-two', `${code[1]}`);
bgColor('.color-three', `${code[2]}`);
bgColor('.color-four', `${code[3]}`);

//gameplay

//start game
row10.turn = true;

//add picked colors to board and appropriate arrays
$('.bottom > span').on('click', (e) => {
  let clickedItem = e.target;
  if(clickedItem.className !== 'delete' && clickedItem.className !== 'submit') {
    if(row10.turn && row10.spaces.length < 4) {
      row10.spaces.push(clickedItem.className);
      $(`.ten-${counter}`).css('background-color', `${clickedItem.className}`);
      counter += 1;
    }
    else if(row9.turn && row9.spaces.length < 4) {
      row9.spaces.push(clickedItem.className);
      $(`.nine-${counter}`).css('background-color', `${clickedItem.className}`);
      counter += 1;
    }
    else if(row8.turn && row8.spaces.length < 4) {
      row8.spaces.push(clickedItem.className);
      $(`.eight-${counter}`).css('background-color', `${clickedItem.className}`);
      counter += 1;
    }  
    else if(row7.turn && row7.spaces.length < 4) {
         row7.spaces.push(clickedItem.className);
         $(`.seven-${counter}`).css('background-color', `${clickedItem.className}`);
         counter += 1;  
    }  
    else if(row6.turn && row6.spaces.length < 4) {
         row6.spaces.push(clickedItem.className);
         $(`.six-${counter}`).css('background-color', `${clickedItem.className}`);
         counter += 1;  
    }  
    else if(row5.turn && row5.spaces.length < 4) {
         row5.spaces.push(clickedItem.className);
         $(`.five-${counter}`).css('background-color', `${clickedItem.className}`);
         counter += 1;  
    }  
    else if(row4.turn && row4.spaces.length < 4) {
         row4.spaces.push(clickedItem.className);
         $(`.four-${counter}`).css('background-color', `${clickedItem.className}`);
         counter += 1;  
    }  
    else if(row3.turn && row3.spaces.length < 4) {
         row3.spaces.push(clickedItem.className);
         $(`.three-${counter}`).css('background-color', `${clickedItem.className}`);
         counter += 1;  
    }  
    else if(row2.turn && row2.spaces.length < 4) {
         row2.spaces.push(clickedItem.className);
         $(`.two-${counter}`).css('background-color', `${clickedItem.className}`);
         counter += 1;  
    }  
    else if(row1.turn && row1.spaces.length < 4) {
         row1.spaces.push(clickedItem.className);
         $(`.one-${counter}`).css('background-color', `${clickedItem.className}`);
         counter += 1;  
    }
  } 
});

// remove color from board and appropriate arrays
$('.delete').on('click', () => {
  if(won === false) {
    if(row10.turn && counter > 1) {
      row10.spaces.pop();
      counter -= 1;     
      $(`.ten-${counter}`).css('background-color', '#CECECE');
    }
    else if(row9.turn && counter > 1) {
      row9.spaces.pop();
      counter -= 1;     
      $(`.nine-${counter}`).css('background-color', '#CECECE');
    }
    else if(row8.turn && counter > 1) {
      row8.spaces.pop();
      counter -= 1;     
      $(`.eight-${counter}`).css('background-color', '#CECECE');
    }  
    else if(row7.turn && counter > 1) {
      row7.spaces.pop();
      counter -= 1;   
      $(`.seven-${counter}`).css('background-color', '#CECECE');
    }  
    else if(row6.turn && counter > 1) {
      row6.spaces.pop();
      counter -= 1;         
      $(`.six-${counter}`).css('background-color', '#CECECE');
    }  
    else if(row5.turn && counter > 1) {
      row5.spaces.pop();
      counter -= 1;      
      $(`.five-${counter}`).css('background-color', '#CECECE');
    }  
    else if(row4.turn && counter > 1) {
      row4.spaces.pop();
      counter -= 1;     
      $(`.four-${counter}`).css('background-color', '#CECECE');
    }  
    else if(row3.turn && counter > 1) {
      row3.spaces.pop();
      counter -= 1;  
      $(`.three-${counter}`).css('background-color', '#CECECE');
    }  
    else if(row2.turn && counter > 1) {
      row2.spaces.pop();
      counter -= 1;  
      $(`.two-${counter}`).css('background-color', '#CECECE');
    }  
    else if(row1.turn && counter > 1) {
      row1.spaces.pop();
      counter -= 1;    
      $(`.one-${counter}`).css('background-color', '#CECECE');
    }   
  }
});

// initate check function to compare row to codes
$('.submit').on('click', () => {
  if(row10.turn && row10.spaces.length === 4){
    checkRow(row10.spaces, 10, row9, row10);
  }
  else if(row9.turn && row9.spaces.length === 4){
    checkRow(row9.spaces, 9, row8, row9);
  }
  else if(row8.turn && row8.spaces.length === 4){
    checkRow(row8.spaces, 8, row7, row8);
  }  
  else if(row7.turn && row7.spaces.length === 4) {
       checkRow(row7.spaces, 7, row6, row7);
  }  
  else if(row6.turn && row6.spaces.length === 4) {
       checkRow(row6.spaces, 6, row5, row6);
  }  
  else if(row5.turn && row5.spaces.length === 4) {
       checkRow(row5.spaces, 5, row4, row5);
  }  
  else if(row4.turn && row4.spaces.length === 4) {
       checkRow(row4.spaces, 4, row3, row4);
  }  
  else if(row3.turn && row3.spaces.length === 4) {
       checkRow(row3.spaces, 3, row2, row3);
  }  
  else if(row2.turn && row2.spaces.length === 4) {
       checkRow(row2.spaces, 2, row1, row2);
  }  
  else if(row1.turn && row1.spaces.length === 4) {
       checkRow(row1.spaces, 1, "", row1);
       if(won === false) {
        $('.code > span').slideDown();
        $('.header').text("Você Perdeu").css('color', 'red');
        // Mostra o botão de reinício apenas se o jogo terminou
        showRestartButton();
       }
  }
      
});

// Função para mostrar o botão de reinício
function showRestartButton() {
  // Verifica se o botão já existe para evitar duplicatas
  if ($('.restart').length === 0) {
    // Cria o botão de reinício dinamicamente
    const restartButton = $('<button class="restart">Restart Game</button>');

    // Adiciona o botão ao final do corpo (body) do documento
    $('body').append(restartButton);

    // Adiciona um ouvinte de eventos para reiniciar o jogo quando o botão for clicado
    restartButton.on('click', function () {
      // Exibe um prompt de confirmação
      const userConfirmed = window.confirm('Deseja reiniciar o jogo?');
      
      // Se o usuário confirmar, recarrega a página
      if (userConfirmed) {
        location.reload(); // Recarrega a página
      }
    });
  }
}
