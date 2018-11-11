import { AuthorsAdmModule } from './authors-adm.module';

describe('AuthorsAdmModule', () => {
  let authorsAdmModule: AuthorsAdmModule;

  beforeEach(() => {
    authorsAdmModule = new AuthorsAdmModule();
  });

  it('should create an instance', () => {
    expect(authorsAdmModule).toBeTruthy();
  });
});
