interface TemplateProps {
  email: string;
  name: string;
  message: string;
}

const pageStyle = {
  margin: 0,
  padding: '32px',
  backgroundColor: '#f5f7fb',
  fontFamily: 'Arial, sans-serif',
  color: '#1f2937',
}

const cardStyle = {
  maxWidth: '640px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '16px',
  padding: '32px',
}

const titleStyle = {
  margin: '0 0 12px',
  fontSize: '28px',
  lineHeight: 1.2,
}

const textStyle = {
  margin: '0 0 16px',
  fontSize: '16px',
  lineHeight: 1.6,
  color: '#4b5563',
}

const badgeStyle = {
  display: 'inline-block',
  marginBottom: '16px',
  padding: '8px 12px',
  borderRadius: '999px',
  backgroundColor: '#ecfdf5',
  color: '#047857',
  fontSize: '14px',
  fontWeight: 700,
}

const messageStyle = {
  marginTop: '20px',
  padding: '16px',
  borderRadius: '12px',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  whiteSpace: 'pre-wrap' as const,
  lineHeight: 1.7,
}

const metaStyle = {
  margin: '0 0 8px',
  fontSize: '14px',
  color: '#6b7280',
}

export function ConfirmTemplate({ email, name, message }: TemplateProps) {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={badgeStyle}>Success</div>
        <h1 style={titleStyle}>Message Received</h1>
        <p style={textStyle}>
          The message from <strong>{name}</strong> has been received successfully.
        </p>
        <p style={metaStyle}>{email}</p>
        <p style={messageStyle}>{message}</p>
      </div>
    </div>
  )
}

export function ForwardTemplate({ email, name, message }: TemplateProps) {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={badgeStyle}>New Message</div>
        <h1 style={titleStyle}>New Message</h1>
        <p style={metaStyle}>
          From <strong>{name}</strong> · {email}
        </p>
        <p style={messageStyle}>{message}</p>
      </div>
    </div>
  )
}