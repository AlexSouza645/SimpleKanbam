// dragAndDrop.test.js
const { fireEvent } = require('@testing-library/dom');

// ... resto do seu código de teste


const mockCards = [document.createElement('div'), document.createElement('div')]; // Simule cards
const mockDropZones = [document.createElement('div'), document.createElement('div')]; // Simule dropzones

// ... definições das suas funções aqui (dragstart, drag, dragend, etc.)
test('A função dragstart adiciona a classe highlight nas dropzones e is-dragging no card', () => {
    // Adicione event listeners às dropzones simuladas (considerando que você as tenha definido)
    mockDropZones.forEach(dropzone => {
      dropzone.addEventListener('dragenter', dragenter);
      dropzone.addEventListener('dragover', dragover);
      dropzone.addEventListener('dragleave', dragleave);
      dropzone.addEventListener('drop', drop);
    });
  
    // Simule o evento dragstart no primeiro card
    fireEvent.dragStart(mockCards[0]);
  
    // Asserções para o comportamento de dragstart
    expect(mockDropZones[0].classList.contains('highLight')).toBe(true);
    expect(mockDropZones[1].classList.contains('highLight')).toBe(true);
    expect(mockCards[0].classList.contains('is-dragging')).toBe(true);
  
    // Limpe os event listeners (opcional)
    mockDropZones.forEach(dropzone => {
      dropzone.removeEventListener('dragenter', dragenter);
      dropzone.removeEventListener('dragover', dragover);
      dropzone.removeEventListener('dragleave', dragleave);
      dropzone.removeEventListener('drop', drop);
    });
  });
  