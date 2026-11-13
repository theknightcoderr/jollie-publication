import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import type { ArticleComment } from '@/types';
import { Avatar } from '@/components/shared/Avatar';
import { Button } from '@/components/shared/Button';
import { FormField } from '@/components/shared/FormField';
import { PlaceholderNotice } from '@/components/shared/PlaceholderNotice';
import { formatDate } from '@/lib/format';
import { routes } from '@/lib/routes';

interface CommentSectionProps {
  comments: ArticleComment[];
}

export function CommentSection({ comments }: CommentSectionProps) {
  const [readerName, setReaderName] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [error, setError] = useState('');
  const [showPhaseNotice, setShowPhaseNotice] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!readerName.trim() || commentBody.trim().length < 10) {
      setError('Please enter your name and a response of at least 10 characters.');
      setShowPhaseNotice(false);
      return;
    }
    setError('');
    setShowPhaseNotice(true);
    setReaderName('');
    setCommentBody('');
  }

  return (
    <section aria-labelledby="comments-heading" className="max-w-reading mx-auto pt-12 border-t border-line space-y-8">
      <div className="flex items-center justify-between">
        <h2 id="comments-heading" className="text-h3 font-serif text-charcoal">
          Reader Responses ({comments.length})
        </h2>
        <span className="text-xs text-ink-soft">Moderated literary discussion</span>
      </div>

      {comments.length === 0 ? (
        <p className="text-caption text-ink-soft italic bg-paper-deep p-5 rounded-sm border border-line">
          No reader responses recorded on this sample piece yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="bg-white border border-line rounded-sm p-5 space-y-3"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Avatar name={comment.authorName} size="sm" />
                  <div>
                    {comment.authorUsername ? (
                      <Link
                        to={routes.writer(comment.authorUsername)}
                        className="text-caption font-semibold text-charcoal hover:text-burgundy"
                      >
                        {comment.authorName}
                      </Link>
                    ) : (
                      <span className="text-caption font-semibold text-charcoal">
                        {comment.authorName}
                      </span>
                    )}
                    <p className="text-xs text-ink-soft">{formatDate(comment.createdAt)}</p>
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-ink-soft">
                  Sample Note
                </span>
              </div>
              <p className="text-caption text-charcoal leading-relaxed">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="bg-paper-deep border border-line rounded-sm p-6 space-y-4">
        <h3 className="text-lg font-serif text-charcoal">Contribute a Reading Note</h3>

        {showPhaseNotice && (
          <PlaceholderNotice
            title="Response Validated"
            message="Form validated. Persistent reader comments and moderation queues will be enabled in Phase 2."
          />
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <FormField id="comment-name" label="Your Name" required>
            <input
              id="comment-name"
              type="text"
              value={readerName}
              onChange={(e) => setReaderName(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2 bg-white border border-line rounded text-caption"
              placeholder="Reader name"
            />
          </FormField>

          <FormField
            id="comment-body"
            label="Your Response"
            required
            error={error || undefined}
          >
            <textarea
              id="comment-body"
              rows={3}
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
              className="w-full p-3.5 bg-white border border-line rounded text-caption"
              placeholder="Share a thoughtful note on this piece…"
            />
          </FormField>

          <div className="flex justify-end">
            <Button type="submit" variant="secondary">
              Validate Response
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}