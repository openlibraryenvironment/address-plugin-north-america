import { getExistingLineField } from '@folio/address-utils';

const backendToFields = (address) => {
  const addressFields = {};

  const premise = getExistingLineField(address.lines, 'premise')?.value
  const thoroughfare = getExistingLineField(address.lines, 'thoroughfare')?.value
  const locality = getExistingLineField(address.lines, 'locality')?.value
  const postalCode = getExistingLineField(address.lines, 'postalcode')?.value
  const administrativeArea = getExistingLineField(address.lines, 'administrativearea')?.value

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

  return addressFields;
}
export default backendToFields;