
import generateStory from "../services/storyService.js";
import storyPrompt from "../prompts/storyPrompt.js";

export const createStory = async (req, res) => {
  try {
    const {
      genre,
      theme,
      characters,
      language,
      mood,
    } = req.body;

    if (!genre || !theme) {
      return res.status(400).json({
        success: false,
        message: "Genre and theme are required",
      });
    }

    const prompt = storyPrompt({
      genre,
      theme,
      characters,
      language,
      mood,
    });

    const story = await generateStory(prompt);

    return res.status(200).json({
      success: true,
      message: "Story generated successfully",
      data: {
        genre,
        theme,
        story,
      },
    });
  } catch (error) {
    console.error("Story generation failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to generate story. Please try again.",
    });
  }
};
