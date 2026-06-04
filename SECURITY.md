# Security Policy

## Reporting a Vulnerability

If you discover a security issue, please report it privately:

- **Email**: Open an issue and we'll exchange contact info
- Do not open a public issue for security vulnerabilities

## Scope

This is a static creative coding project. There is no server, no database, no user data, no authentication. The attack surface is limited to:

- XSS via malicious query parameters (mitigated: no query param usage)
- Canvas/Web Audio API resource exhaustion (mitigated: bounded loop)

## Supported Versions

| Version | Supported |
|---------|-----------|
| latest  | ✅ |

## Dependencies

Only dev dependency: Vite (build tool). No runtime dependencies. Run `npm audit` to check for advisories.
