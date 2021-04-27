/**
 * Создайте объект animal который будет иметь свойство voice и
 * метод getVoice который будет это свойство выводить в консоль
 * Отнаследуйтесь от animal и измените voice.
 * Выведете результат getVoice всех объектов.
 */

const animal = {
  voice: 'none',
  getVoice() {
    console.log(this.voice);
  },
};

const cat = Object.create(animal);
cat.voice = 'meow';

animal.getVoice();
cat.getVoice();

const animalClone = Object.assign({}, animal);
animalClone.getVoice();
