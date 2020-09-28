const formFiedsToObj = (fields, coverUrl) => ({
  ...fields,
  Cover: coverUrl,
  MinimalPrice: parseFloat(fields.MinimalPrice),
  Pages: parseFloat(fields.Pages),
  Progress: parseFloat(fields.Progress),
  ExpectedPrice: parseFloat(fields.ExpectedPrice),
  Amount: parseFloat(fields.Amount),
  ExpectedAmount: parseFloat(fields.ExpectedAmount),
  Subscribers: parseFloat(fields.Subscribers),
  Authors: [fields.Authors]
});

export default formFiedsToObj;
