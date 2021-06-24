# Crust IPFS Upload action

Upload your website or content to [Crust's public IPFS gateway](https://crustwebsites.net/ipfs/bafybeifx7yeb55armcsxwwitkymga5xf53dxiarykms3ygqic223w5sk3m#x-ipfs-companion-no-redirect) and pin.

## Inputs

### `path`

**Required** Path to directory sent to IPFS

### `crust-secret-key`

> Since we need to make sure the stability of this IPFS Public Gateway, we required a secret key to access this WRITABLE API, you can get secret key by:
>
> 1. Emailing <hi@crust.network>
> 2. Join Crust [Discord Channel](https://discord.gg/D97GGQndmx)

*Optional*, *crustwebsites.net* gateway secret key.

### `ipns-key`

> ipfs key gen <ipns-key>:
> 

*Optional*, default ''

## Outputs

### `hash`

**string**, Uploaded IPFS cid(CIDv0) hash value.

### `ipns`

**string**, Ipns for latest cid

## Example usage

```yaml
uses: XueMoMo/ipfs-upload-action@v1
with:
  path: 'build'
  crust-secret-key: ${{ secrets.CRUST_SECRET_KEY }}
  ipns-key: 'ipns-for-docs'
```

## Contribution

Feel free to dive in! [Open an issue](https://github.com/crustio/ipfs-upload-action/issues/new) or send a PR.

To contribute to Crust in general, see the [Contribution Guide](https://github.com/crustio/crust/blob/master/docs/CONTRIBUTION.md)

## License

[MIT](https://github.com/crustio/ipfs-crust-action/blob/main/LICENSE) @Crust Network
