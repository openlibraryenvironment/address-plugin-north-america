
# address-plugin-north-america

This is a plugin designed for use with `address-plugin-utils` as part of a general set of plugins. This plugin in particular refers to the US specific address form.
## Generic information
For the generic information about how these plugins operate, please see [here](https://github.com/openlibraryenvironment/address-plugin-generic/blob/master/README.md). (I'd HIGHLY recommend starting there rather than trying to jump in blind here).

## plugin-specific details
The US form has some magic when it comes to the displayed `Address Line 1` and `AddressLine 2`. As per normal, it accepts data from the backend with `Premise` and `Thoroughfare`, and if both exists it will display those in `Address Line 1` and `AddressLine 2` respectively. However if just `Thoroughfare` exists, that will be displayed in `Address Line 1`, with `Address Line 2` left blank. This works in both directions, so you'd expect a user input of 

```
Address Line 1: "ABC Library",
Address Line 2: "123 Street"
```
to wind up as
```
Premise: "ABC Library",
Thoroughfare: "123 Street"
```
but an input without an Address Line 2:
```
Address Line 1: "123 Street"
```
to end up as 
```
Thoroughfare: "123 Street"
```

This means that `Address Line 1` is listed as required.
`backendToFields` and `fieldsToBackend` should be able to do most of the lifting here.

## Supported countries
This plugin currently supports address forms for USA and Canada
