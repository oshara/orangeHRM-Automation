export class LoginPage{
    constructor(page){
        this.page = page;
        this.userName = page.locator('[name="username"]');
        this.passWord = page.locator('[name="password"]');
        this.loginButton = page.locator('[type="submit"]');

    }

    async login(username,password){
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.loginButton.click();
    }
}