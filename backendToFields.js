import { getExistingLineField } from '@folio/address-utils';

const backendToFields = (address) => {
  const addressFields = {};

  const premise = getExistingLineField(address.lines, 'premise')?.value
  const thoroughfare = getExistingLineField(address.lines, 'thoroughfare')?.value
  const locality = getExistingLineField(address.lines, 'locality')?.value
  const postalCode = getExistingLineField(address.lines, 'postalcode')?.value
  const administrativeArea = getExistingLineField(address.lines, 'administrativearea')?.value
  const country = getExistingLineField(address.lines, 'country')?.value
  const countryCode = address?.countryCode

  if (premise && thoroughfare) {
    addressFields.addressLineOne = premise;
    addressFields.addressLineTwo = thoroughfare;
  } else {
    addressFields.addressLineOne = thoroughfare;
  }

  if (locality) {
    addressFields.locality = locality;
  }
  if (postalCode) {
    addressFields.postalCode = postalCode;
  }
  if (administrativeArea) {
    addressFields.administrativeArea = administrativeArea;
  }
  if (country) {
    addressFields.country = country;
  }
  if (countryCode) {
    addressFields.countryCode = countryCode;
  }

  return addressFields;
}
export default backendToFields;