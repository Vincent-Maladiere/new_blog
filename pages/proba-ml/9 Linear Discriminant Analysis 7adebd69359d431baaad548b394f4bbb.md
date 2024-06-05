# 9. Linear Discriminant Analysis

We consider classification models of the form:

$$
p(y=c|\theta, x)=\frac{p(x|y=c,\theta)p(y=c,\theta)}{\sum_c' p(x|y=c',\theta)p(y=c',\theta)}
$$

where $p(y=c,x)$ is the prior over the class labels, and $p(x|y=c,\theta)$ is the class conditional density for $c$.

- The overall model is a **generative model** since it specifies the distribution over the feature $x$, $p(x|y=c,\theta)$
- By contrast, a **discriminative model** directly estimates the class posterior $p(y=c|\theta,x)$

[9.2 Gaussian Discriminant Analysis](9%20Linear%20Discriminant%20Analysis%207adebd69359d431baaad548b394f4bbb/9%202%20Gaussian%20Discriminant%20Analysis%20ab81de8fb5c4468eb3b7558cf5e4940b.md)

[9.3 Naive Bayes classifiers](9%20Linear%20Discriminant%20Analysis%207adebd69359d431baaad548b394f4bbb/9%203%20Naive%20Bayes%20classifiers%203ec86a2852394072bea7efe701c5a5da.md)

[9.4 Generative vs Discriminative classifiers](9%20Linear%20Discriminant%20Analysis%207adebd69359d431baaad548b394f4bbb/9%204%20Generative%20vs%20Discriminative%20classifiers%20edeec18a75234b93a1d7ea22eb0bd4d3.md)