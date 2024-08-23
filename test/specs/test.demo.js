describe('Login saucedemo.com', () => {
    it('Login successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        //definition
        const usernameTxtbox = await browser.$("#user-name")
        const passwordTxtbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')
        
        const addCart = await $('#add-to-cart-sauce-labs-backpack')
        const cartIcon = await $('#shopping_cart_container')

        //step
        await browser.pause(5000)
        await usernameTxtbox.addValue("standard_user")
        await passwordTxtbox.addValue("secret_sauce")
        await loginButton.click()
        await browser.pause(5000)
        await addCart.click()
        await cartIcon.click()
        

        //await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(cartIcon).toBeDisplayed()
        
         
    });
});