import { BooksAdmModule } from './books-adm.module';

describe('BooksAdmModule', () => {
  let booksAdmModule: BooksAdmModule;

  beforeEach(() => {
    booksAdmModule = new BooksAdmModule();
  });

  it('should create an instance', () => {
    expect(booksAdmModule).toBeTruthy();
  });
});
