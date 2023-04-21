//
// 模板方法
// https://zhuanlan.zhihu.com/p/163692932
//

// 定义角色创建的抽象类
class CharacterCreator {
  // 核心
  // 模板方法
  createCharacter(name, role) {
    this.beforeCreate();
    const character = this.create(name);
    this.created();
    // ...

    this.selectRole(character, role);
    this.customize(character);
    return character;
  }

  // 生命周期钩子
  beforeCreate() {}
  created() {}
  beforeMount() {}
  mounted() {}
  update() {}
  beforeDestroy() {}
  destroyed() {}

  // 具体方法：创建角色
  create(name) {
    console.log(`创建了角色：${name}`);
    return { name };
  }

  // 抽象方法：选择角色职业
  selectRole(character, role) {
    throw new Error("必须重写 selectRole 方法");
  }

  // 钩子方法：个性化定制
  customize(character) {
    console.log(`默认不进行个性化定制`);
  }
}

// 实现具体的角色创建
class WarriorCreator extends CharacterCreator {
  selectRole(character) {
    console.log(`选择了职业：战士`);
    character.health = 200;
    character.attack = 50;
  }
}

class MageCreator extends CharacterCreator {
  selectRole(character) {
    console.log(`选择了职业：法师`);
    character.health = 100;
    character.attack = 80;
  }

  customize(character) {
    console.log(`进行了法师的个性化定制`);
    character.spell = "fireball";
  }
}

// 测试
const warriorCreator = new WarriorCreator();
const warrior = warriorCreator.createCharacter("战士一号", "warrior");
console.log(warrior);

const mageCreator = new MageCreator();
const mage = mageCreator.createCharacter("法师一号", "mage");
console.log(mage);
