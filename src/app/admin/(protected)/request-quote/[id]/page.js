import EnquiryDetail from "../../_lib/EnquiryDetail";

export default async function AdminRequestQuoteDetailPage({ params }) {
  const { id } = await params;

  return (
    <EnquiryDetail
      id={id}
      title="Request Quote Details"
      basePath="/admin/request-quote"
      backLabel="Back to Request Quote"
    />
  );
}
