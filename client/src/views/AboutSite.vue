<template>
  <body>
    <h1>TodoList</h1>
    <p>Jednoduchý TodoList vytvořený pomocí frameworku Vue.js. Serversite běží na Expressu.</p>
    <p>Aplikace je nasazená na Heroku pomocí free programu, kde používá pouze jeden Add-on a to ClearDB MySQL.</p>
    <p>Implementoval jsem kompletní REST API které pracuje s MySQL databází. Databáze má dva tably jeden pro ukládání users a druhý pro ukládní úkolů.</p>
    <h2>Funkce TodoListu</h2>
    <ul>
      <li>Přidání úkolu</li>
      <li>Smazání úkolu</li>
      <li>Označení úkolu jako splněný (přeškrtnutí)</li>
      <li>Editaci úkolu (jak splněného tak nesplněného) - ID úkolu je předáváno jako paramater v URL</li>
      <li>Export úkolů do JSON</li>
      <li>Filt úkolů (splněný, nesplněný, všechny) - filtr úkolů je předáván pomocí parametru v URL</li>
      <li>Přihlášení uživatele</li>
    </ul>
    <h2>Uživatelé</h2>
    <p>V zadání nebyl požadavek na registraci uživatelů tak jsem to neimplementoval. V databázi jsou pevně daní uživatelé. Jejich seznam s hesly je níže.</p>
    <ul>
      <li>email: <strong>email@email.cz</strong> heslo: <strong>email</strong></li>
      <li>email: <strong>jiri.vrany@tul.cz</strong> heslo: <strong>jirivrany</strong></li>
      <li>email: <strong>martin.hajek1@tul.cz</strong> heslo: <strong>martinhajek1</strong></li>
      <li>email: <strong>admin@admin.cz</strong> heslo: <strong>admin</strong></li>
    </ul>
    <h2>Zajímavosti</h2>
    <p>Aplikace je připravena pro práci více uživatelů najednou. Pomocí odesílání websocketů není problém s tím že pokud jeden uživatel provede změnu druhému by se změna neprojevila.</p>
    <p>Pro design aplikace jsem využíval výhradně bootsrap.</p>
    <h2>Limity Heroku</h2>
    <p>Heroku obsahuje nějaké limitující pravidla či vlastnolsti které se mi na mém lokálním stroji neprojevovali.</p>
    <p>Prvním limitem je že server musí každou vteřinu posílat na websocket server zprávu (interval by možná mohl být delší). Je to z důvodu že po cca 30 vteřinách když se client odpojí od aplikace Heroku si myslí že apliakce padla protože websocket server je nečinný a spadne s chybou H15.</p>
    <p>Dále jsem musel změnit připojení z klasické na pool, protože aplikace po odpojení ztratila spojení s Heroku ClearDB databází a spadla.</p>
    <p>Client site i Server site běží na jedné URL (mělo by to běžet na oddělených strojích) nicméně nevím jak by to bylo s free plánem od Heroku (ačkoliv je add-on ClearDB zadarmo Heroku po vás žádá platební kartu přidat a nerad bych aby mi účtovali za druhou aplikaci).</p>
    <p>Jelikož je jakkákoliv změna zpracována odesláním websocketu občas trošičku déle trvá než se změna projeví (např. při odškrtnutí úkolu). Je to nejspíše z důvodu pomalejší odezvy websocketu jelikož free plan asi nenabízí nejvyšší rychlosti. Na localehostu to funguje prakticky okamžitě.</p>
  </body>
</template>

<script>
export default {
  name: "AboutSite",
  data() {
    return {
    };
  },
};
</script>