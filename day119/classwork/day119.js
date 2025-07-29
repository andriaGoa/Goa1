const zgvisLomebi = new Map();
zgvisLomebi.set("name", "leo");
zgvisLomebi.set("habitant", "pasific ocean");
zgvisLomebi.set("age", 5);
for (const key of zgvisLomebi.keys()) {
  console.log(`${key}: ${zgvisLomebi.get(key)}`);
}