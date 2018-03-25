export const MAX_TEXT_INPUT_LENGTH = 350;

export const HARASSMENT_TYPE_OPTIONS = [{
  value: 'physical',
  label: 'Assédio Físico',
}, {
  value: 'verbal',
  label: 'Assédio Verbal',
}, {
  value: 'homophobia',
  label: 'Homofobia',
}, {
  value: 'racism',
  label: 'Racismo',
}, {
  value: 'transfobia',
  label: 'Transfobia',
}, {
  value: 'other',
  label: 'Outro tipo de Assédio',
}];

export const YES_NO_OPTIONAL_OPTIONS = [{
  value: 'yes',
  label: 'Sim',
}, {
  value: 'no',
  label: 'Não',
}, {
  value: 'notInformed',
  label: 'Prefiro não responder',
}];

export const GENDER_OPTIONS = [{
  value: 'woman',
  label: 'Mulher',
}, {
  value: 'man',
  label: 'Homem',
}, {
  value: 'nonbinary',
  label: 'Não binário',
}];

export const SKIN_COLOR_OPTIONS = [{
  value: 'black',
  label: 'Negra',
}, {
  value: 'white',
  label: 'Branca',
}, {
  value: 'brown',
  label: 'Parda',
}, {
  value: 'asian',
  label: 'Amarela',
}, {
  value: 'indian',
  label: 'Indígena',
}, {
  value: 'notInformed',
  label: 'Prefiro não dizer',
}];

export const AGE_OPTIONS = [{
  value: 'lessThan18',
  label: 'Menor de 18 anos',
}, {
  value: 'between18and25',
  label: 'Entre 18 e 25 anos',
}, {
  value: 'between26and35',
  label: 'Entre 26 e 35 anos',
}, {
  value: 'between36and50',
  label: 'Entre 36 e 50 anos',
}, {
  value: 'between51and65',
  label: 'Entre 51 e 65 anos',
}, {
  value: 'over65',
  label: 'Maior de 65 anos',
}];

export const WAGE_OPTIONS = [{
  value: 'belowOne',
  label: 'Até R$724,00',
}, {
  value: 'fromOneToThree',
  label: 'De R$724,01 a R$2.172,00',
}, {
  value: 'fromThreeToFive',
  label: 'De R$2.172,01 a R$3.620,00',
}, {
  value: 'fromFiveToTen',
  label: 'De R$3.620,01 a R$7.240,00',
}, {
  value: 'fromTenToTwenty',
  label: 'De R$7.240,01 a R$14.480,00',
}, {
  value: 'overTwenty',
  label: 'Mais de R$14.480,01',
}];

export const FOLLOWUP_ACTIONS_OPTIONS = [{
  key: 'talkedToAccountable',
  label: 'Falei com algum Responsável (RH, Superior direto, etc)',
}, {
  key: 'gaveFeedback',
  label: 'Dei o feedback para o envolvido',
}, {
  key: 'policeReport',
  label: 'Fiz um Boletim de Ocorrência',
}];
