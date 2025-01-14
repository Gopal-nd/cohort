# How do dns works
(what will happen if i type google.com in my browser)

When you type **google.com** in your browser and press Enter, several processes take place before the web page is displayed. Here’s a detailed explanation focusing on **DNS resolution** and the sequence of events:

---

### 1. **Browser Cache Lookup**
   - The browser first checks its own cache to see if it has the DNS record (IP address) for **google.com**. If found, the process skips to the connection phase.
   - If not, the browser proceeds to the next step.

---

### 2. **OS-level DNS Cache**
   - If the browser cache doesn't have the record, the operating system’s DNS cache is checked.
   - If the OS finds the IP, it passes it back to the browser.

---

### 3. **Hosts File Lookup**
   - The OS also checks the local `hosts` file, which maps domain names to IP addresses. This file can override external DNS resolution.
   - Example: If `google.com` is mapped to a specific IP in the hosts file, that IP will be used.

---

### 4. **Querying the Recursive Resolver**
   - If the IP is not found locally, the request is sent to a **recursive DNS resolver** (usually provided by your ISP or a public DNS service like Google DNS or Cloudflare DNS).
   - The recursive resolver takes over and tries to resolve the IP for **google.com**.

---

### 5. **Root DNS Server Lookup**
   - The recursive resolver starts at the **root DNS servers** (e.g., `.` zone) to find the authoritative servers for the **.com** top-level domain (TLD).
   - The root server responds with a referral to the **TLD name server** for **.com**.

---

### 6. **TLD Name Server Lookup**
   - The recursive resolver contacts the **TLD name server** for **.com**, asking for the authoritative DNS server for **google.com**.
   - The TLD server responds with a referral to Google's authoritative name servers (e.g., `ns1.google.com`).

---

### 7. **Authoritative Name Server Lookup**
   - The recursive resolver queries Google's **authoritative name server** (e.g., `ns1.google.com`) to get the IP address of **google.com**.
   - The authoritative server responds with the IP address (e.g., `142.250.183.14`).

---

### 8. **Caching the DNS Record**
   - The recursive resolver caches the IP address and shares it with the browser.
   - The browser also caches the record to speed up future requests for **google.com**.

---

### 9. **Browser Connects to the IP**
   - Once the IP address is resolved, the browser uses it to establish a connection to Google's servers via **TCP** (Transmission Control Protocol).
   - If the connection is secure, an **HTTPS** handshake is performed.

---

### DNS Record Types Involved
   - **A Record**: Maps a domain name to an IPv4 address.
   - **AAAA Record**: Maps a domain name to an IPv6 address.
   - **CNAME Record**: Resolves one domain to another domain.
   - **MX Record**: Used for mail servers.
   - **TXT Record**: Stores additional information like SPF and DKIM for email authentication.

---

### Visualization of DNS Resolution

1. **You Type google.com**
   - Request → Browser Cache → OS Cache → Hosts File → Recursive Resolver.

2. **Recursive Resolver Process**
   - Root Server → TLD Name Server → Authoritative Server → IP Address.

3. **Final Step**
   - The IP address is used to establish a connection with Google's web servers.

This process takes milliseconds, and thanks to caching, repeated requests are much faster.


---
It uses the UDP and port 53 

req -> google.com
res -> 143.21.32.12

- first when you type it will look in the cache of browser, os, if not found 
- It will go for the Recursive Resolver where the request will reach the  Root server -> from there it will go to the TOP LEVEL DOMAIN (like .com .in..uk) -> authoritative Name servers (like , dodady, aws ) -> from there it will send the ip of the domain

it will reach the neer dns root server

use 
`dig google.com`

There are 13 Root server in the world
https://www.iana.org/domains/root/servers

map https://root-servers.org/

Top level domain list 
https://data.iana.org/TLD/tlds-alpha-by-domain.txt
