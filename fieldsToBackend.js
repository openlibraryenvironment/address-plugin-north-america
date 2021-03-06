import { deleteFieldIfExists, getExistingLineField } from '@folio/address-utils';

const fieldsToBackend = (address) => {
  const addressId = address.id || null;
  const countryCode = address.countryCode || null;
  const newAddress = {};
  let lines = [];

  if (address.addressLineOne && address.addressLineTwo) {
    // In this case we assume the first line is a premise, and the second is a thoroughfare
    const premiseId = getExistingLineField(address.lines, 'premise')?.id;
    const thoroughfareId = getExistingLineField(address.lines, 'thoroughfare')?.id;

    lines.push({ type: { value: 'Premise' }, value: address.addressLineOne, id: premiseId });
    lines.push({ type: { value: 'Thoroughfare' }, value: address.addressLineTwo, id: thoroughfareId });
  } else {
    // The only other scenario that should happen is a blank address line 2,
    // in which case we assume that address line 1 was the thoroughfare.
    const thoroughfareId = getExistingLineField(address.lines, 'thoroughfare')?.id;
    lines.push({ type: { value: 'Thoroughfare' }, value: address.addressLineOne, id: thoroughfareId });
    // In this case we can also check if there used to be a premise, and delete it if so
    lines.push(deleteFieldIfExists(address.lines, 'premise'));
  }
  if (address.locality) {
    const id = getExistingLineField(address.lines, 'locality')?.id;
    lines.push({ type: { value: 'Locality' }, value: address.locality, id });
  }
  if (address.administrativeArea) {
    const id = getExistingLineField(address.lines, 'administrativearea')?.id;
    lines.push({ type: { value: 'AdministrativeArea' }, value: address.administrativeArea, id });
  }
  if (address.postalCode) {
    const id = getExistingLineField(address.lines, 'postalcode')?.id;
    lines.push({ type: { value: 'PostalCode' }, value: address.postalCode, id });
  }
  if (address.country) {
    const id = getExistingLineField(address.lines, 'country')?.id;
    lines.push({ type: { value: 'Country' }, value: address.country, id });
  }

  lines = lines.filter(line => (line !== null));
  newAddress.addressLabel = address.addressLabel;
  newAddress.lines = lines;
  newAddress.id = addressId;
  newAddress.countryCode = countryCode;

  return newAddress;
};

export default fieldsToBackend;
