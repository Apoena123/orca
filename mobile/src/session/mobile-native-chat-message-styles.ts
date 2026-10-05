import { StyleSheet } from 'react-native'
import { colors, radii, spacing, typography } from '../theme/mobile-theme'

export const TEXT_SIZE = 17
export const MONO_SIZE = 12

export const styles = StyleSheet.create({
  row: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm
  },
  rowUser: {
    alignItems: 'flex-end'
  },
  content: {
    maxWidth: '100%',
    gap: spacing.sm
  },
  userBubble: {
    maxWidth: '88%',
    backgroundColor: colors.textPrimary,
    borderRadius: radii.card,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  userText: {
    color: colors.bgBase,
    fontSize: TEXT_SIZE,
    lineHeight: TEXT_SIZE + 6,
    fontWeight: '500'
  },
  // Reasoning is the agent thinking aloud; its amber text color is applied in
  // MobileNativeChatMessage via MobileMarkdown's `color` prop. The slight fade
  // keeps it reading as an aside rather than as the reply itself.
  reasoning: {
    opacity: 0.85
  },
  // A subagent's row is an aside to the conversation, set off the way desktop sets it off.
  subagent: {
    borderLeftWidth: 2,
    borderLeftColor: colors.borderSubtle,
    paddingLeft: spacing.md
  },
  subagentCaption: {
    color: colors.statusAmber,
    fontFamily: typography.monoFamily,
    fontSize: MONO_SIZE
  },
  toolRun: {
    marginTop: spacing.xs
  },
  toolRunHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm
  },
  toolRunToggle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: 3
  },
  toolRunCount: {
    color: colors.statusAmber,
    fontFamily: typography.monoFamily,
    fontSize: MONO_SIZE,
    fontWeight: '700'
  },
  toolRunLabel: {
    flex: 1,
    color: colors.statusAmber,
    fontFamily: typography.monoFamily,
    fontSize: MONO_SIZE
  },
  toolRunActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: 3
  },
  toolRunActiveLabel: {
    flex: 1,
    color: colors.statusAmber,
    fontSize: typography.bodySize
  },
  toolRunBody: {
    paddingLeft: spacing.sm,
    borderLeftWidth: 2,
    borderLeftColor: colors.borderSubtle,
    marginTop: spacing.xs
  },
  toolLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: 3
  },
  toolName: {
    color: colors.statusAmber,
    fontFamily: typography.monoFamily,
    fontSize: MONO_SIZE + 1,
    fontWeight: '600'
  },
  toolPreview: {
    flex: 1,
    color: colors.statusAmber,
    fontFamily: typography.monoFamily,
    fontSize: MONO_SIZE
  },
  toolPreviewLink: {
    color: colors.statusAmber,
    textDecorationLine: 'underline'
  },
  toolDetail: {
    paddingLeft: spacing.lg,
    paddingBottom: spacing.xs,
    gap: spacing.xs
  },
  mono: {
    color: colors.statusAmber,
    fontFamily: typography.monoFamily,
    fontSize: MONO_SIZE,
    lineHeight: MONO_SIZE + 5
  },
  toolResult: {
    borderRadius: radii.button,
    backgroundColor: colors.bgPanel,
    padding: spacing.md
  },
  toolResultError: {
    backgroundColor: colors.diffDeletedBg
  },
  imageRef: {
    color: colors.textSecondary,
    fontSize: TEXT_SIZE
  },
  imageThumb: {
    width: 200,
    height: 150,
    borderRadius: radii.card,
    backgroundColor: colors.bgRaised,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderSubtle
  },
  diff: {
    borderRadius: radii.button,
    backgroundColor: colors.bgPanel,
    paddingVertical: spacing.xs,
    overflow: 'hidden'
  },
  diffLine: {
    color: colors.statusAmber,
    fontFamily: typography.monoFamily,
    fontSize: MONO_SIZE,
    lineHeight: MONO_SIZE + 5,
    paddingHorizontal: spacing.sm
  },
  diffAdd: {
    color: colors.gitDecorationAdded,
    backgroundColor: colors.diffAddedBg
  },
  diffDel: {
    color: colors.gitDecorationDeleted,
    backgroundColor: colors.diffDeletedBg
  },
  diffMeta: {
    color: colors.statusAmber
  }
})
