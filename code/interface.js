//
// 通过interface、类、重载的方式修改类的行为
//

// Book基类
class Book {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

// 小说
class NovelBook extends Book {
  constructor(name, price) {
    super(name, price);
  }
}

// 小说类书籍的促销价格
class OffNovelBook extends NovelBook {
  getPrice() {
    // 促销价格
    return this.price * 0.8;
  }
}

const book = new OffNovelBook("遮天", 5000);
console.log(book.getPrice());
