import _ from 'lodash';

export default function mapRecordFromAirtable(record) {
  const authors = _.zip(
    record.fields.Authors,
    record.fields['Name (from Authors)'],
    record.fields['Info (from Authors)'],
    record.fields['AvatarUrl (from Authors)'],
    record.fields['Email (from Authors)']
  ).map(record => _.zipObject(
    ['Id', 'Name', 'Info', 'AvatarUrl', 'Email'],
    record
  ));
  const authorsString = record.fields['Name (from Authors)'] ? record.fields['Name (from Authors)'].join(', ') : '';
  return ({
    Title: record.fields.Title,
    Annotation: record.fields.Annotation,
    Pages: record.fields.Pages,
    Language: record.fields.Language,
    Progress: record.fields.Progress,
    Cover: record.fields.Cover,
    MinimalPrice: record.fields.MinimalPrice,
    ExpectedPrice: record.fields.ExpectedPrice,
    Amount: record.fields.Amount,
    ExpectedAmount: record.fields.ExpectedAmount,
    Subscribers: record.fields.Subscribers,
    Authors: authors,
    SimilarBooksIds: record.fields.SimilarBooks,
    Id: record.id,
    AuthorsString: authorsString
  });
}
