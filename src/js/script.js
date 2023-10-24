// tooltip
const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item)=> {
  item.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(event){
  const tooltipBox = crialTooltipBox(this);
  tooltipBox.style.top = event.pageY + 'px';
  tooltipBox.style.left = event.pageX + 'px';

  onMouseMove.tooltipBox = tooltipBox;
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave)
  this.addEventListener('mousemove', onMouseMove)
}

const onMouseLeave = {
  handleEvent(){
    this.tooltipBox.remove()
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);
  }
}

const onMouseMove = {
  handleEvent(event){
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    this.tooltipBox.style.left = event.pageX + 20 + 'px';

  }
}


function crialTooltipBox (element){
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip')
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
};






// funcionamento

const funcionamento = document.querySelector('[data-semana]');
  
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();


  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto');
  };





