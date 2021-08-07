Feature: login manager
@manager_id
Scenario: manager_id
   Given url git 
   Given datalari kullanarak sayfaya gir
   |username |password |
   |manager  |Manager1!|
   Given login butonuna tikla
   Then sayfaya girildigini onayla

@manager_id2  @smoke
Scenario: manager_id2
   Given url git 
   Given datalari kullanarak sayfaya gir
   |username |password |
   |manager2  |Manager2!|
   Given login butonuna tikla
   Then sayfaya girildigini onayla

 
 #tag name ile terminal den komutlar ile testler run edilebilir
   #./node_modules/.bin/cypress-tags run -e TAGS='not @manager_id'   -> bu tagdaki haric calistir
   #./node_modules/.bin/cypress-tags run -e TAGS='@manager_id'  -> bu tag i calistir
   #./node_modules/.bin/cypress-tags run -e TAGS='@manager_id2' or '@smoke'  -> bu sekilde de oluyor ikisi birden ...