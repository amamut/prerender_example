# prerender_example

---

1. Install redis `brew install redis`
2. Start redis `brew services start redis`
3. Terminal #1: `yarn dev`
4. Terminal #2: `yarn prerender`
5. `curl -H "user-agent: googlebot" -H "host: iheart.com" http://localhost:8081`
