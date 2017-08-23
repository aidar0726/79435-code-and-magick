'use strict';
var COUNT_MAG = 4;

// функция получения случайного числа из массива
var randomResult = function (arrayLength) {
  var reusultIndexArray = ((arrayLength - 1) * Math.random()).toFixed(0);
  return reusultIndexArray;
};

var arrayNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var arraySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var arrayCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var arrayEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// функция создания массива особенностей магов
var renderArrayWizard = function (countWizard) {

  var resultArrayWizard = [];

  for (var i = 0; i < countWizard; i++) {
    var obj = {
      name: arrayNames[randomResult(arrayNames.length)] + ' ' + arraySurnames[randomResult(arraySurnames.length)],
      eyesColor: arrayEyesColor[randomResult(arrayEyesColor.length)],
      coatColor: arrayCoatColor[randomResult(arrayCoatColor.length)]
    };

    resultArrayWizard[i] = obj;
  }

  return resultArrayWizard;
};

var arrayWizard = renderArrayWizard(COUNT_MAG);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// функция для вставки данных из массива в шаблон
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// функция для вставки шаблонов в исходный тэг
var insertWizardsContainer = function (wizards, addWizard) {
  var fragment = document.createDocumentFragment();
  wizards.forEach(function (element) {
    fragment.appendChild(addWizard(element));
  });

  similarListElement.appendChild(fragment);
};

insertWizardsContainer(arrayWizard, renderWizard);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

