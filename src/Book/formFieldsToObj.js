const formFiedsToObj = (fields, coverUrl) => {
  console.log(fields)
  const obj = {
    ...fields,
    Cover: coverUrl || fields.OldCoverUrl,
    MinimalPrice: parseFloat(fields.MinimalPrice),
    Pages: parseFloat(fields.Pages),
    Progress: parseFloat(fields.Progress),
    ExpectedPrice: parseFloat(fields.ExpectedPrice),
    Amount: parseFloat(fields.Amount),
    ExpectedAmount: parseFloat(fields.ExpectedAmount),
    Subscribers: parseFloat(fields.Subscribers),
    Authors: fields.Authors.map(author => author.value).filter(Boolean)
  };
  delete obj.OldCoverUrl;
  return obj;
};
export default formFiedsToObj;
